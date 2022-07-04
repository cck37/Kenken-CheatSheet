import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import getAllPermutations from "../scripts/utils";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  size: yup.number().required().positive().integer(),
  op: yup.string().matches(/(\+|\*)/),
  ans: yup.number().required().positive().integer(),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    alert(Array.from(getAllPermutations(data)).toString());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Cell Size</label>
        <input type="number" {...register("size", { valueAsNumber: true })} />
        {errors.size && <p>{errors.size.message}</p>}
      </div>
      <div>
        <label>Opperator</label>
        <input {...register("op")} />
        {errors.op && <p>{errors.op.message}</p>}
      </div>
      <div>
        <label>Answer</label>
        <input type="number" {...register("ans", { valueAsNumber: true })} />
        {errors.ans && <p>{errors.ans.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}
