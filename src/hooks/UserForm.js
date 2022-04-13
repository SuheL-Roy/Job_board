
import { ref } from "vue";
import api from '../helper/api';

const userForm = () =>{

const errors = ref([]);

const loading = ref(false);

const getErrorMessage = (key) =>{
    return errors.value[key]?.join(" ");
}
const submit = (payload,endpoint, method= "post") =>{
    errors.value =[];
    loading.value = true;

    return new Promise(async(resolve,reject)=>{
        const {ok,data,originalError} = await api[method](endpoint,payload);
        if(ok){
            resolve(data);
            loading,value = false;
        }else{
            errors.value = originalError.response.data.errors;
            reject(originalError);
            loading.value = false;
        }
    })
}
return{
    submit,loading,getErrorMessage
}

};

export default userForm;