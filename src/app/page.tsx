import { FormLogin } from "./components/formLogin";



export default async function Home() {
/*   const response = await fetch('http://localhost:3331/todolistar')

  const {todos} = await response.json()
  console.log(todos) */

  return (
/*     */
  
   /*  <div className="flex rounded-lg bg-slate-400 p-3.5 lg:p-6"> */
   <div className="p-3.5 lg:p-6 flex justify-center gap-0  lg:gap-80"> 
   
      <FormLogin /> 
      <div className=""></div>
      
 </div> 

  /*   </div> */
  
  );
}
