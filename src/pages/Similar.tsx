import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ageSchema, countrySchema, emailSchema, genderSchema, nameSchema, passwordSchema, termsAcceptedSchema } from "../utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions } from "../slice";
import { AppDispatch } from "../types";


interface IFormInput {
  name: string;
  age: number;
  email:string;
  password: string;
  confirmPassword:string;
  gender: string;
  country: string;
  termsAccepted?: boolean | undefined;
  image: FileList ;
}
  



const schema = yup.object().shape({
  name: nameSchema,
  age: ageSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf([yup.ref("password")], "Passwords do not match"),
  country: countrySchema,
  gender: genderSchema,
  termsAccepted: termsAcceptedSchema,
  image: yup.mixed<FileList>().required("Please upload an image"),
});

 const Similar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInput) => {
    const file = data.image[0];
    if(file){
    const reader = new FileReader();
    reader.onloadend = ()=>{
      const base64Data = reader.result as string;
      const res = {
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        gender: data.gender,
        termsAccepted: data.termsAccepted,
        img: base64Data,
        country: data.country
      }

      if(data.password !== data.confirmPassword){
        alert("Passwords do not match")
      } else{
        dispatch(actions.changeData(res));
        navigate( "/")
      }
    }
    reader.readAsDataURL(file)
  }


  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
    <br />
      <label>Age</label>
      <input {...register("age")} />
      {errors.age && <p>{errors.age.message}</p>}
    <br />
    <label>Email</label>
      <input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
    <br />
    <label>Password</label>
      <input {...register("password")} type="password" />
      {errors.password && <p>{errors.password.message}</p>}
    <br />
      <label>Confirm password</label>
      <input {...register("confirmPassword")} type="password" />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
    <br />
    <label>Gender</label>
      <select {...register("gender")} >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
      </select>
      {errors.gender && <p>{errors.gender.message}</p>}
    <label>Country</label>
      <input {...register("country")} />
      {errors.country && <p>{errors.country.message}</p>}
    <br />
    <label>Terms Accepted</label>
      <input {...register("termsAccepted")} type="checkbox" 
      />
      {errors.termsAccepted && <p>{errors.termsAccepted.message}</p>}
    <br />
    <label>Image</label>
      <input {...register("image")} type="file" />
      {errors.image && <p>{errors.image.message}</p>}
    <br />
      <input type="submit" />
    </form>
  );
};

export default Similar;