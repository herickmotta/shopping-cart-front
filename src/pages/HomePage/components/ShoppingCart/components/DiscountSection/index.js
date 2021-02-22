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
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
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
    setLoading(true);
    setDisabled(true);
    setTimeout(() => {
      if (voucher) {
        setError(false);
        setVoucher(voucher);
        setMessage("Voucher Applied!");
        setLoading(false);
        setDisabled(false);
      } else {
        setError(true);
        setVoucher(null);
        setMessage("Invalid voucher");
        setLoading(false);
        setDisabled(false);
      }
    }, 500);
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
          <Button
            text="APPLY"
            onClick={verifyVoucher}
            loading={loading}
            disabled={disabled}
          />
        </ButtonBox>
      </div>
      {message && <MessageBox text={message} isError={error} />}
    </Container>
  );
}
