import './App.css';
import Form from './component/Form';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // import { FcLike } from "react-icons";
  import { AiFillCloseCircle } from "react-icons/ai";
  import { FcLike } from "react-icons/fc";

function App() {


  async function  callApi(){
    const apiCall = await fetch('https://codehelp-apis.vercel.app/api/get-top-courses');
    const apiData = await apiCall.json();
    let apiJasonData = apiData.data;
    console.log(apiJasonData.Business);
  }
  function notify(){
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      toast.success("success");
      // toast.pending("Pending");
      toast.error("error");
      toast.warning("danger");
    // alert("hello");
  }
  return (
    <div className='form-conatiner'>
      <ToastContainer />
      <AiFillCloseCircle />
      <FcLike />
      <button onClick={notify}>Onclic
      </button>
      <Form />
    </div>
  );
}

export default App;
