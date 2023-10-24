import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products(){
return(
    <Layout>
        <Link className="bg-purple-900 rounded-md py-1 px-2 text-white" href={'/products/new'}>
            Шинэ бүтээгдэхүүн нэмэх
        </Link>
    </Layout>
);
}