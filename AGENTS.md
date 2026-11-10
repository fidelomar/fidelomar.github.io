# Normas de Colaboración y Reglas para Agentes (AGENTS.md)

Este repositorio contiene la especificación, diseño y código del sitio web profesional de Fidel Omar García (`fidelomar.github.io`). Todos los agentes inteligentes de asistencia al desarrollo, modelos de lenguaje y colaboradores automatizados deben acatar de forma estricta las directrices establecidas en este documento.

---

## 1. Documentos Normativos
Los siguientes documentos constituyen la base vinculante del proyecto. Ningún cambio o propuesta técnica puede contradecir lo estipulado en ellos:

- **`docs/PROJECT_SPEC.md`**: Define el propósito del sitio, audiencias, principios de diseño, arquitectura de contenido, restricciones y criterios de aceptación.
- **`docs/CONTENT_PRIVACY.md`**: Establece las políticas obligatorias de privacidad, confidencialidad, manejo de marcas, anonimización de proyectos y restricciones de publicación de datos personales.

Todo agente debe consultar y validar sus acciones contra estos documentos antes de generar o alterar contenido.

---

## 2. Política de Ramas de Trabajo
- **Rama obligatoria:** Todo trabajo, commit y desarrollo debe realizarse de forma exclusiva en la rama `develop`.
- **Protección de `main`:** Queda terminantemente prohibido realizar commits directos en la rama `main`.
- **Prohibición de merge:** Los agentes automatizados no deben realizar operaciones de merge hacia `main`. La integración hacia la rama de producción es responsabilidad exclusiva del propietario del repositorio tras la auditoría correspondiente.
- **Verificación previa:** Antes de modificar o crear archivos, el agente debe verificar y confirmar que la rama activa de trabajo sea `develop`.

---

## 3. Delimitación Estricta del Alcance
- El agente debe ceñirse estrictamente a las tareas y solicitudes indicadas en el prompt en ejecución.
- Queda prohibido modificar archivos, dependencias o configuraciones que se encuentren fuera del alcance delimitado.
- No se deben inicializar herramientas, frameworks (como Next.js), scripts ni archivos de empaquetado (`package.json`) a menos que el usuario lo solicite expresamente en la tarea actual.

---

## 4. Prohibición de Información Ficticia o Inventada
- Queda estrictamente prohibido inventar o asumir experiencia profesional, métricas, porcentajes de optimización, testimonios, nombres de clientes o proyectos.
- No se deben inventar direcciones de correo electrónico profesionales, números telefónicos ni perfiles de redes sociales que no hayan sido proporcionados explícitamente.
- Todo dato ausente debe señalarse como pendiente de validación o resolverse mediante los canales públicos autorizados (LinkedIn/GitHub).

---

## 5. Accesibilidad y Estándares Web
Cuando se implemente código de interfaz en etapas futuras:
- Es obligatorio el uso de HTML semántico nativo (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Todos los componentes interactivos deben ser completamente accesibles mediante navegación por teclado y compatibles con lectores de pantalla (cumplimiento WCAG 2.1 nivel AA).
- No se deben utilizar estructuras basadas exclusivamente en contenedores genéricos (`div`, `span`) cuando existan elementos semánticos estándar.
- Debe garantizarse el contraste de color adecuado y soporte para reducción de movimiento.

---

## 6. Prohibición de Secretos y Datos Personales
- Ningún commit, archivo de configuración, prueba unitaria, archivo de entorno (`.env`), comentario de código ni archivo de documentación debe incluir:
  - Teléfonos personales, enlaces a mensajerías directas (WhatsApp) o correos privados.
  - Cédulas profesionales, números de seguridad social o domicilios particulares.
  - Nombres internos de sistemas protegidos o identidades de clientes bajo confidencialidad.
  - Credenciales, llaves de API, contraseñas, tokens de autenticación o cadenas de conexión.

---

## 7. Cambios Pequeños, Atómicos y Auditables
- Cada intervención debe traducirse en cambios incrementales, pequeños y fácilmente auditables.
- Se debe evitar la generación masiva de código no solicitado o cambios estructurales innecesarios.
- Los mensajes de confirmación o commit deben ser claros, concisos y describir con precisión el propósito de la modificación.

---

## 8. Validación Obligatoria Previa a la Entrega
Antes de dar por concluida cualquier tarea, el agente debe realizar las siguientes comprobaciones de calidad:
1. Inspeccionar el estado del repositorio mediante `git status --short` para asegurar que solo se hayan modificado o creado los archivos autorizados.
2. Comprobar que no existan errores de formato o espacios residuales mediante `git diff --check`.
3. Escanear el contenido generado para asegurar la ausencia de datos personales prohibidos, secretos o cadenas de texto simuladas.
4. Confirmar que la rama activa permanezca en `develop`.

