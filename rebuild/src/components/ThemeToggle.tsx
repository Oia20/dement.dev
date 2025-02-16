import { useStore } from '@nanostores/react';
import { theme } from '../store/theme';

export const ThemeToggle = () => {
  const $theme = useStore(theme);

  const toggleTheme = () => {
    theme.set($theme === 'light' ? 'dark' : 'light');
  };

  return (
<>
          {$theme === 'light' ? (
            <button
            onClick={toggleTheme}
            
            className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            <h1 className="text-gray-900 dark:text-white">🌞</h1>
      
          </button>
          ) : (
            <button
            onClick={toggleTheme}
            
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            <h1 className="text-gray-900 dark:text-white">🌛</h1>
      
          </button>
          )}
          </>
  );
};