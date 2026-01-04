import { useTheme } from '@/theme/ThemeContext';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s } from 'react-native-size-matters';
import MobileFooter from '../footers/MobileFooter';

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  paddingOff?:boolean;
  headerProps?: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showFooter = true,
  paddingOff = false, 
}) => {
  const { theme, isDarkMode } = useTheme();

  return (
<SafeAreaView 
  edges={['top', 'left', 'right']}
  style={[styles.safeArea, 
    { backgroundColor: theme.colors.pageBackground, 
      paddingTop: paddingOff ? 0 : s(60) 
    }]}
>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <KeyboardAvoidingView 
        style={styles.flex} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          {children}
        </View>

        {showFooter && <MobileFooter />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;