import React from "react";
import "../assets/style/index.css";
/* 
- background(buat ganti background button),
- variant(nambahin style tambahan yang di butuhin buat buttonnya style bawaan yang ku setting cuma rounded,ukuran text,padding,margin,backgoundnya doang),
- children(semua yang ada di dalem tag Buttonnya nanti)

contoh gunain nantinya gini : 
<Button background='red' variant='text-white blablabla' >yang di dalem ini childrennya bebas mau tag apa aja atau bacaan apa aja mau pake span juga buat font awesome boleh</Button>
*/

const Button = (props) => {
  const {
    children,
    variant = "text-white",
    type = "button",
  } = props;
  return (
    <button
      type={`${type}`}
      className={`${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
