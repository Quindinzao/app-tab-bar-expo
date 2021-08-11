Olá, viajante! Venho aqui lhes dar alguma instrução do que deve ser feito, caso você
queira reprodizir manualmente o que foi feito.

1. Rode os seguintes comandos:
    a. expo install @react-navigation/native
    b. expo install react-native-screens react-native-safe-area-context
    c. expo install @react-navigation/bottom-tabs
    d. expo install @expo/vector-icons

2. Agora é só ocê copiar com muita cautela, lembrando que as páginas são, basicamente,
    um ctrl + c e crtl + v uma da outra, então não precisa se preocupar com isso ;), 
    apenas atente-se ao <tab.routes.tsx>, pois lá está escrita a versão que, pelo menos 
    até hoje (11/08/2021), não foi 'deprecated'

3. O item <options = {{headerShown: false}}>, presente na <Tab.Screen/> está lá para
    que não apareça o cabeçalho. Se quiser testar removê-lo, fique a vontade para ver 
    o que acontece (talvez não aconteça nada em seu dispositivo, varia bastante).

4. Bons estudos! (Se alguém ler isso, não é mesmo khkzfjtsktykjfgj)