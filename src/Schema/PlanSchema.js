import * as Yup from 'yup';
export const PlanSchema ={
    Name:'',Duration:'',Amount:undefined,
}
const PlanValidationSchema = Yup.object().shape({
    Name: Yup.string().required('Name is required'),
    Duration: Yup.string().required('Duration is required'),
    Amount: Yup.number()
    .required("Amount is required")
    .positive("Must be valid")
    .integer("Must Be number"),  
 });

export default PlanValidationSchema;