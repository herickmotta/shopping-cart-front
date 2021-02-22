import React, { useState, useEffect } from "react";
import Button from "../../../../../../components/Button";
import MessageBox from "../../../../../../components/MessageBox";
import { useCartContext } from "../../../../../../contexts/CartContext";
import VouchersService from "../../../../../../services/VouchersService";
import { Input, Container, ButtonBox } from "./styles";

export default function DiscountSection() {
  const { setVoucher } = useCartContext();
  const [availableVouchers, setAvailableVouchers] = useState([]);
  const [inputVoucher, setInputVoucher] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  async function getVouchersAvailable() {
    const data = await VouchersService.getAll();
    if (data) {
      setAvailableVouchers(data);
    } else {
      setError(true);
      setMessage("Error getting vouchers, please reload the page");
    }
  }

  function verifyVoucher() {
    const voucher = availableVouchers.find((v) => v.code === inputVoucher);
    if (voucher) {
      setError(false);
      setVoucher(voucher);
      setMessage("Voucher Applied!");
    }
  }

  useEffect(() => {
    getVouchersAvailable();
  }, []);

  return (
    <Container>
      <div>
        <Input
          placeholder="Discount code"
          value={inputVoucher}
          onChange={(e) => setInputVoucher(e.target.value)}
        />
        <ButtonBox>
          <Button text="APPLY" onClick={verifyVoucher} />
        </ButtonBox>
      </div>
      {message && <MessageBox text={message} isError={error} />}
    </Container>
  );
}
