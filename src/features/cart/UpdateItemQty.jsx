/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decQty, incQty } from "./cartSlice";

const UpdateItemQty = ({ pizzaId,currentQty }) => {
    const dispatch = useDispatch()
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={()=> dispatch(decQty(pizzaId))}>-</Button>
      <span className="text-sm font-medium">{currentQty}</span>
      <Button type="round" onClick={()=> dispatch(incQty(pizzaId))}>+</Button>
    </div>
  );
};

export default UpdateItemQty;
