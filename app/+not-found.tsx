import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView'; 

// This is the not found (404) screen used when a user visits a non-existent route. I'll delete this file if I do not need it.
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen does not exist yet.I&apos()ll have to create itand implement it as I want.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">I&apos()m changing this text and it will be like this until further notice. I need more inspiration.</ThemedText>
          <ThemedText>Try the link I corrected earlier. How&apos()s it? Does it work??</ThemedText>
        </Link>
      </ThemedView>
<ThemedView></ThemedView>
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
