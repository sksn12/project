import React from "react";
import DaumPostcode from "react-daum-postcode";
import styles from "../Address/address.module.css";

const Address = ({ setAddressClick, setPost, post }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    let new_post = { ...post };
    new_post.address = fullAddress;
    console.log(new_post);
    setPost(new_post);

    setAddressClick(false);
  };
  return (
    <DaumPostcode
      className={styles.postCodeStyle}
      onComplete={handleComplete}
    />
  );
};

export default Address;
