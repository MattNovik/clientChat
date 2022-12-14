import Picker from '@emoji-mart/react';
import useStore from '../../../../hooks/useStore';
import { useCallback, useEffect } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

export default function EmojiMart({ setText, messageInput }: any) {
  // извлекаем соответствующие методы из хранилища
  const { showEmoji, setShowEmoji, showPreview } = useStore(
    ({ showEmoji, setShowEmoji, showPreview }: any) => ({
      showEmoji,
      setShowEmoji,
      showPreview,
    })
  );

  // обработчик нажатия клавиши `Esc`
  const onKeydown = useCallback(
    (e: any) => {
      if (e.key === 'Escape') {
        setShowEmoji(false);
      }
    },
    [setShowEmoji]
  );

  // регистрируем данный обработчик на объекте `window`
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onKeydown]);

  // метод для добавления эмодзи к тексту сообщения
  const onSelect = ({ native }: any) => {
    setText((text: any) => text + native);
    messageInput.focus();
  };

  return (
    <div className="container emoji">
      <button
        className="btn"
        type="button"
        onClick={() => {
          setShowEmoji(!showEmoji);
        }}
        disabled={showPreview}
      >
        <BsEmojiSmile className="icon" />
      </button>
      {showEmoji && (
        <Picker
          onEmojiSelect={onSelect}
          emojiSize={20}
          showPreview={false}
          perLine={6}
        />
      )}
    </div>
  );
}
