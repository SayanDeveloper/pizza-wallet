import { Spin } from "antd";
import { useMoralis, useNativeBalance } from "react-moralis";

function NativeBalance(props) {
  const { data: balance, isLoading } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();
  if (!account || !isAuthenticated) return null;
  if (isLoading) return <Spin style={{ color: "#3e389f" }}></Spin>;
  return (
    <div
      style={{
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "#3E389F",
        fontSize: "1.75rem",
        marginTop: "1.25rem",
        fontWeight: "bold",
      }}
    >
      {balance.formatted}
    </div>
  );
}

export default NativeBalance;
