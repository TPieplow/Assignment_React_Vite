
import * as Yup from 'yup';


const validation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  message: Yup.string().required('Text message is required')
})