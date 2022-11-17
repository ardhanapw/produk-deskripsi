import { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button} from "react-bootstrap";
import ProductDataService from "../services/product.services";

const AddProduct = ({ id, setProductId }) => {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (nama === "" || deskripsi === "") {
      setMessage({ error: true, msg: "Seluruh kolom wajib diisi!" });
      return;
    }
    const newProduct = {
      nama,
      deskripsi,
    };
    console.log(newProduct);

    try {
      if (id !== undefined && id !== "") {
        await ProductDataService.updateProduct(id, newProduct);
        setProductId("");
        setMessage({ error: false, msg: "Produk berhasil diperbaharui" });
      } else {
        await ProductDataService.addProducts(newProduct);
        setMessage({ error: false, msg: "Produk baru berhasil ditambahkan" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setNama("");
    setDeskripsi("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ProductDataService.getProduct(id);
      console.log("the record is :", docSnap.data());
      setNama(docSnap.data().nama);
      setDeskripsi(docSnap.data().deskripsi);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductName">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Nama Produk"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductDescription">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Deskripsi Produk"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Tambahkan
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;