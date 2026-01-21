import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen does not exist yet.I&apos()ll have to create it.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">I&apos()m changing this text and it will be like this until further notice. I need more inspiration.</ThemedText>
          <ThemedText>Try the linnk I corrected earlier on. How&apos()s it? Does it work?</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
