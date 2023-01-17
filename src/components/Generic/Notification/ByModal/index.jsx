import { Modal } from "antd";

const { confirm } = Modal;

const warning = ({
  title,
  content,
  onOk,
  okText,
  okButtonProps,
  showConfirm,
}) => {
  confirm({
    title,
    content,
    onOk,
    okButtonProps,
    okText,
    open: showConfirm,
  });
};

export { warning };
