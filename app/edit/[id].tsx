import axios from "axios";
import { GetServerSideProps } from "next";
import CreateEditTask from "../create/page";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:5000/tasks/${params?.id}`);
  return { props: { task: res.data } };
};

export default CreateEditTask;
