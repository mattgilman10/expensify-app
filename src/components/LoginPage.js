import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div>
        <button onClick={startLogin} >Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);













// const LoginPage = () => (
//     <div>
//         <h1>Login Page</h1>
//         <form>
//             <input 
//                 type="text"
//                 placeholder="Name"
//             />
//             <input 
//                 type="text"
//                 placeholder="Password"
//             />
//             <Link to="/dashboard">
//                 <button>
//                     Login
//                 </button>
//             </Link>
//         </form>
//     </div>
// );