
export class ApiDispatcher {
    dispatch(vendor){
        if (vendor === 'imlss'){
            return `http://imlss.buildersarea.com/`;
            // return `http://localhost:8082/`; 
        } else if (vendor === 'tnd'){
            return `http://tnd.buildersarea.com/`;
            // return `http://localhost:8084/`; 
        } else if (vendor === 'seclock'){
            return `http://seclock.buildersarea.com/`;
            // return `http://localhost:8086/`; 
        } else if (vendor === 'deltana'){
            return `http://deltana.buildersarea.com/`;
            // return `http://localhost:8091/`; 
        } else if (vendor === 'richelieu'){
            return `http://richelieu.buildersarea.com/`;
            // return `http://localhost:8092/`; 
        } 
        
        
        else {
            return '';
        }
    }
}