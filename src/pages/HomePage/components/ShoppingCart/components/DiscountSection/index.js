import React, { useState, useEffect } from "react";
import Button from "../../../../../../components/Button";
import { useCartContext } from "../../../../../../contexts/CartContext";
import VouchersService from "../../../../../../services/VouchersService";
import { Input, Container, ButtonBox } from "./styles";

export default function DiscountSection() {
  const { setVoucher } = useCartContext();
  const [availableVouchers, setAvailableVouchers] = useState([]);
  const [inputVoucher, setInputVoucher] = useState("");

  async function getVouchersAvailable() {
    const data = await VouchersService.getAll();
    if (data) {
      setAvailableVouchers(data);
    } else {
      alert("get vouchers error");
    }
  }

  function verifyVoucher() {
    const voucher = availableVouchers.find((v) => v.code === inputVoucher);
    if (voucher) {
      setVoucher(voucher);
    }
  }

  useEffect(() => {
    getVouchersAvailable();
  }, []);

  return (
    <Container>
      <Input
        placeholder="Discount code"
        value={inputVoucher}
        onChange={(e) => setInputVoucher(e.target.value)}
      />
      <ButtonBox>
        <Button text="APPLY" onClick={verifyVoucher} />
      </ButtonBox>
    </Container>
  );
}
