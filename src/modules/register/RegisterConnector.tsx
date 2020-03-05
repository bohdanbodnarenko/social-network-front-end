import React, {useState} from "react";

import RegisterView from "./ui/RegisterView";
import {httpService} from "../../utils/httpService";
import {openNotification} from "../../utils/notificationService";
import {FieldError} from "../../shared/constants/interfaces";

export const RegisterConnector = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldError[]>([]);

  const handleSubmit = async (fields: any) => {
    setLoading(true);
    console.log(fields);
    try {
      const { data } = await httpService.post("/register", fields);
      if (data) {
        openNotification("Registration Success", "success");
        props.history.push("/login");
      }
    } catch ({ data }) {
      setErrors(data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <RegisterView
      onSubmit={handleSubmit}
      loading={loading}
      serverErrors={errors}
    />
  );
};
