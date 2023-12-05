// import Hamburguesa from '../Hamburguesa/Hamburguesa';
// import LanguageSelector from '../LanguageSelector/LanguageSelector';
// import './Formulario.scss';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../public/assets/logo.png';
// import { useState } from 'react';
// import axios from 'axios';
// import emailjs from 'emailjs-com';


// export default function Formulario() {
//   const initialFormData = {
//     name: '',
//     email: '',
//     phone: '',
//     machinery: '',
//     city: '',
//     rentalDate: '',
//     rentalDays: '',
//     comments: '',
//   };


//   const [formData, setFormData] = useState(initialFormData);
//   const [successMessageVisible, setSuccessMessageVisible] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Envía el correo electrónico usando Email.js
//       await emailjs.send(
//         'service_tagxx28',
//         'template_pugpaaq',
//         formData,
//         'default_service'
//       );

//       setSuccessMessageVisible(true);

//       // Resetear el formulario
//       setFormData(initialFormData);

//       // Ocultar el mensaje después de 3 segundos
//       setTimeout(() => {
//         setSuccessMessageVisible(false);
//       }, 4000);
//     } catch (error) {
//       console.error('Error al enviar el correo', error);
//       alert('Error al enviar el correo');
//     }
//   };
//   // const initialFormData = {
//   //   name: '',
//   //   email: '',
//   //   phone: '',
//   //   machinery: '',
//   //   city: '',
//   //   rentalDate: '',
//   //   rentalDays: '',
//   //   comments: ''
//   // };

//   // const [formData, setFormData] = useState(initialFormData);
//   // const [successMessageVisible, setSuccessMessageVisible] = useState(false);
//   // const navigate = useNavigate();  // Cambiado a useNavigate

//   // const handleChange = (e) => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // };

//   // const handleSubmit = async () => {
//   //   try {
//   //     await axios.post('http://localhost:5000/enviar-correo', formData);
//   //     setSuccessMessageVisible(true);

//   //     // Resetear el formulario
//   //     setFormData(initialFormData);

//   //     // Ocultar el mensaje y redirigir después de 3 segundos
//   //     setTimeout(() => {
//   //       setSuccessMessageVisible(false);
//   //       navigate('/contacto');  // Cambiado a navigate
//   //     }, 4000);
//   //   } catch (error) {
//   //     console.error('Error al enviar el correo', error);
//   //     alert('Error al enviar el correo');
//   //   }
//   // };
//     return <>
//           <header className="header">
//           <Link to="/home">
//         <img src={logo} className="logoFerrimas2" alt="logo" />
//         </Link>
//         {/* <p className="idiomas">Idiomas</p> */}
//         <LanguageSelector/>
//         <div className="ceje-hambu">
//           <Hamburguesa/>
//         </div>
//       </header>
//      <div className="formulario-container">
//       <h2>Póngase en contacto con nosotros</h2>
//       <p>Al completar este formulario de contacto, podrá aclarar cualquier duda o consulta relacionada con nuestros servicios, precios, tarifas y diversas ofertas.
//         Asimismo, tendrá la posibilidad de solicitar un presupuesto de manera fácil y rápida, sin compromiso alguno.
//         Nuestro servicio de atención al cliente le proporcionará una respuesta rápida en el menor tiempo posible.</p>
//       <form>
//           <label>Nombre o Empresa</label>
//           <input
//             type="text"
//             placeholder="Introduzca Nombre o Empresa"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <label>Correo Electrónico</label>
//           <input
//             type="email"
//             placeholder="Introduzca su e-mail"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         <label>Teléfono</label>
//         <input
//             type="number"
//             placeholder="Introduzca su Teléfono"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         <label>Maquinaria</label>
//         <input
//             type="text"
//             placeholder="Introduzca la maquina que desea alquilar"
//             name="machinery"
//             value={formData.machinery}
//             onChange={handleChange}
//           />
//         <label>Población</label>
//         <input
//             type="text"
//             placeholder="Introduzca su población"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//           />
//         <label>Fecha de alquiler</label>
//         <input
//             type="date"
//             placeholder="Fecha que desea alquilar"
//             name="rentalDate"
//             value={formData.rentalDate}
//             onChange={handleChange}
//           />
//         <label>Días de alquiler</label>
//         <input
//             type="number"
//             placeholder="Días de alquiler"
//             name="rentalDays"
//             value={formData.rentalDays}
//             onChange={handleChange}
//           />
//         <label>Comentarios</label>
//         <input
//             type="text"
//             placeholder="Información adicional"
//             name="comments"
//             value={formData.comments}
//             onChange={handleChange}
//           />
//         <button type="button" onClick={handleSubmit}>Enviar</button>
//       </form>
//       {successMessageVisible && (
//           <div className="success-message">
//             <p>Formulario enviado con éxito! Nos pondremos en contacto contigo tan pronto como sea posible. Muchas gracias.</p>
//           </div>
//           )}
//     </div>
//     </>

    
// }
