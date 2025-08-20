import './ConfirmModal.css';

interface ConfirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmModal({ message, onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <p>{message}</p>
        <div className="modal_buttons">
          <button className="btn_cancel" onClick={onCancel}>Cancelar</button>
          <button className="btn_confirm" onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
