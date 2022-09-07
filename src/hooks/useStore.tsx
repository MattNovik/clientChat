import create from 'zustand';

const useStore = create((set, get: any) => ({
  // файл
  file: null,
  // индикатор отображения превью файла
  showPreview: false,
  // индикатор отображения компонента с эмодзи
  showEmoji: false,
  // метод для обновления файла
  setFile: (file: any) => {
    // получаем предыдущий файл
    const prevFile = get().file;
    if (prevFile) {
      // https://w3c.github.io/FileAPI/#creating-revoking
      // это позволяет избежать утечек памяти
      URL.revokeObjectURL(prevFile);
    }
    // обновляем файл
    set({ file });
  },
  // метод для обновления индикатора отображения превью
  setShowPreview: (showPreview: any) => set({ showPreview }),
  // метод для обновления индикатора отображения эмодзи
  setShowEmoji: (showEmoji: any) => set({ showEmoji }),
}));

export default useStore;
