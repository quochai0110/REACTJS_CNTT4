import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props: any) {
  // kiểm tra xem người dùng đã đăng nhập vào hệ thống hay chưa?
  const isLogin = true;
  

  if (!isLogin) {
    return <Navigate to="/login"></Navigate>;
  }
  return props.element;
}
