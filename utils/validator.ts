import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    name: yup.string().min(3, 'Please enter a valid name').required('Required'),
    email: yup.string().email('Please enter a valid email').required('Required'),
    message: yup.string().min(10, 'Please enter valid message greater than 9 characters').required('Required')
});
