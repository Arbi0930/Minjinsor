import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProducts(){
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    async function createProduct(){
        const data = {title, description, price};
        await axios.post('/api/products',data);
    }
    return(
        <Layout>
            <form onSubmit={createProduct}>
            <h1>Шинэ Бүтээгдэхүүн</h1>
            <label>Бүтээгдэхүүний нэр</label>
            <input type="text"
            placeholder="Бүтээгдэхүүний нэр"
            value={title}
            onChange={ev => setTitle(ev.target.value)}/>
            <label>Тайлбар</label>
            <textarea 
            placeholder="Тайлбар"
            value={description}
            onChange={ev=>setDescription(ev.target.value)}
            />
            <label>Үнэ ₮</label>
            <input type="number"
            placeholder="Үнэ"
            value={price}
            onChange={ev=>setPrice(ev.target.value)}
            />
            <button
            type="submit"
            className="btn-primary">
                Хадгалах
            </button>
            </form>
        </Layout>
    );
}