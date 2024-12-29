## **🍫 Vue Chocolate Game**
## Español

### **🖍 Descripción**
Este es un **mini proyecto interactivo** que desarrollé cuando comencé a aprender **Vue.js**. No es un juego en el sentido tradicional, sino una demostración práctica para aplicar los conceptos básicos que estaba adquiriendo en ese momento. 

El objetivo del proyecto era poner en práctica:
- Manejo de **eventos** y **estados** en Vue.
- Uso de **componentes** y **propiedades**.
- Implementación de funcionalidades interactivas como seleccionar elementos y guardar el estado de la aplicación.

Este proyecto es un reflejo de mis primeros pasos en Vue.js y una muestra de mi evolución como desarrollador.

---

### **🎮 Cómo Funciona**
1. **Interacción principal**:
   - Simula "comerte" una tableta de chocolate.
   - Haz clic en un cuadrado para seleccionarlo, o usa los botones para "comer" filas o columnas completas.

2. **Funciones adicionales**:
   - Guarda el estado de la tableta para retomarlo más tarde.
   - Reinicia el juego si decides empezar desde el principio.

3. **Alertas interactivas**:
   - Cuando te terminas la tableta, aparece un mensaje.
   - Si decides no comer más, puedes guardar la tableta para más tarde.

---

### **🗂️ Estructura del Proyecto**

```
vue-chocolate/
├── dist/                <-- Archivos generados para despliegue en producción (GitHub Pages)
├── public/              <-- Archivos públicos, como la plantilla HTML
│   └── index.html       <-- Plantilla base
├── src/                 <-- Código fuente principal
│   ├── assets/          <-- Recursos estáticos (imágenes, etc.)
│   │   └── onzas.jpeg   <-- Imagen de la tableta de chocolate
│   ├── components/      <-- Componentes Vue
│   │   └── Tableta.vue  <-- Componente principal que controla la lógica y el diseño
│   ├── App.vue          <-- Componente raíz de la aplicación
│   └── main.js          <-- Punto de entrada para inicializar Vue
├── .gitignore           <-- Lista de archivos/carpetas que Git ignora
├── package.json         <-- Dependencias y scripts de npm
├── vue.config.js        <-- Configuración para GitHub Pages
└── README.md            <-- Este archivo
```

---

### **📖 Conceptos Aplicados**
1. **Componentes en Vue.js**: 
   - Separación del código en piezas reutilizables.
   - Comunicación entre componentes usando `props`.
   
2. **Manejo del estado**:
   - Cambiar colores y estados de los cuadrados al hacer clic.
   - Guardar y recuperar el estado de la tableta con `localStorage`.

3. **Eventos interactivos**:
   - Detectar clics y movimientos del ratón para actualizar la UI.
   - Responder con mensajes personalizados a las acciones del usuario.

4. **Despliegue en GitHub Pages**:
   - Configuración para publicar el proyecto en línea.

---

### **🚀 Cómo Verlo en Acción**
Puedes probar el proyecto aquí: [Vue Chocolate Game](https://btojaka.github.io/vue-chocolate/)

---

### **⚙️ Cómo Instalar y Ejecutar**
Si deseas ejecutarlo localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/Btojaka/vue-chocolate.git
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto en modo desarrollo**:
   ```bash
   npm run serve
   ```

4. **Genera una versión optimizada para producción**:
   ```bash
   npm run build
   ```

5. **Despliega el proyecto en GitHub Pages**:
   ```bash
   npm run deploy
   ```

---

### **🖼️ Captura del Proyecto**

![Captura de pantalla 2024-12-29 a las 13 16 08](https://github.com/user-attachments/assets/2cecfcfa-253e-4f87-9a49-b31ce81dfe68)

---

### **✍️ Reflexión**
Este proyecto marcó un hito importante en mi aprendizaje de Vue.js. Aunque es simple, me ayudó a comprender las bases del framework y a ganar confianza para trabajar en proyectos más complejos. Me gustaría mantenerlo como una muestra de mis comienzos y de mi progreso como desarrollador.

---


## **🍫 Vue Chocolate Game**
## English

### **🖍 Description**
This is an **interactive mini-project** I developed when I first started learning **Vue.js**. It's not a traditional game but a practical demonstration to apply the basic concepts I was learning at that time.

The project's main goals were to practice:
- Handling **events** and **state** in Vue.
- Using **components** and **props** effectively.
- Implementing interactive functionalities such as selecting elements and saving the application's state.

This project represents my initial steps in Vue.js and serves as a snapshot of my early progress as a developer.

---

### **🎮 How It Works**
1. **Main Interaction**:
   - Simulates "eating" a chocolate bar.
   - Click on a square to select it, or use the buttons to "eat" entire rows or columns.

2. **Additional Features**:
   - Save the chocolate bar's state to continue later.
   - Restart the game if you want to start fresh.

3. **Interactive Alerts**:
   - A message appears when you've eaten all the chocolate.
   - If you decide not to eat more, you can save the chocolate bar for later.

---

### **🗂️ Project Structure**

```
vue-chocolate/
├── dist/                <-- Production-ready files for GitHub Pages deployment
├── public/              <-- Public files, including the HTML template
│   └── index.html       <-- Base template
├── src/                 <-- Main source code
│   ├── assets/          <-- Static resources (images, etc.)
│   │   └── onzas.jpeg   <-- Chocolate bar image
│   ├── components/      <-- Vue components
│   │   └── Tableta.vue  <-- Main component controlling logic and design
│   ├── App.vue          <-- Root component
│   └── main.js          <-- Entry point for initializing Vue
├── .gitignore           <-- List of files/folders ignored by Git
├── package.json         <-- npm dependencies and scripts
├── vue.config.js        <-- Configuration for GitHub Pages
└── README.md            <-- This file
```

---

### **📖 Key Concepts Applied**
1. **Vue.js Components**:
   - Code separation into reusable pieces.
   - Communication between components using `props`.

2. **State Management**:
   - Changing colors and states of squares on click.
   - Saving and restoring the chocolate bar's state using `localStorage`.

3. **Interactive Events**:
   - Detecting clicks and mouse movements to update the UI.
   - Responding with customized messages to user actions.

4. **GitHub Pages Deployment**:
   - Configuring the project for online publication.

---

### **🚀 Try It Out**
You can try the project here: [Vue Chocolate Game](https://btojaka.github.io/vue-chocolate/)

---

### **⚙️ How to Install and Run Locally**
If you want to run it locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Btojaka/vue-chocolate.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the project in development mode**:
   ```bash
   npm run serve
   ```

4. **Build an optimized production version**:
   ```bash
   npm run build
   ```

5. **Deploy the project to GitHub Pages**:
   ```bash
   npm run deploy
   ```

---

### **🖼️ Screenshot of the Project**
![Captura de pantalla 2024-12-29 a las 13 16 08](https://github.com/user-attachments/assets/2cecfcfa-253e-4f87-9a49-b31ce81dfe68)

---

### **✍️ Reflection**
This project marked an important milestone in my Vue.js learning journey. While simple, it helped me understand the framework's basics and gain confidence to work on more complex projects. I want to keep it as a record of my beginnings and progress as a developer.

---


