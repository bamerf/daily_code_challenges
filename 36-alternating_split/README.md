# Alternating Split

For building the encrypted string:

- Take every 2nd character from the string, then the other characters that are not every 2nd character, and concat them as a new String.
- Do this `n` times!

To do the above, you must build an `encrypt(message, n)` method that performs like this:

```
encrypt("This is a test!", 1) -> "hsi  etTi sats!"
encrypt("This is a test!", 2) -> "s eT ashi tist!"
```

### Extension

Build a `decrypt(encrypted_message, n)` method that takes the encrypted text and decrypts it like this:

```
decrypt("hsi  etTi sats!", 1) -> "This is a test!"
decrypt("s eT ashi tist!", 2) -> "This is a test!"
```

**For both methods:**

- If the input-string is empty/null/undefined raise an error that says "Input Invalid!"
- If n is <= 0 then return the input text.
