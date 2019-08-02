import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button onClick={startLogin} className='button'>Login with Google</button>
        </div>
        
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