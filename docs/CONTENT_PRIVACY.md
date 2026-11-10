# Política de Privacidad y Manejo de Contenido: fidelomar.github.io

Este documento define las directrices y normas obligatorias relativas a la privacidad, confidencialidad y tratamiento de información para el sitio web profesional `fidelomar.github.io`. Ningún colaborador humano o agente automatizado está autorizado a publicar contenido que viole estas directivas.

---

## 1. Información que Puede Publicarse
La información pública admisible en el sitio web se limita estrictamente a datos de carácter profesional general:

- **Nombre profesional:** Fidel Omar García.
- **Perfil y especialidad técnica:** Desarrollador / Ingeniero de software especializado en el ecosistema .NET (C#), bases de datos SQL Server, arquitectura de APIs e integración de sistemas empresariales.
- **Ubicación pública general máxima permitida:** Únicamente "Tampico, Tamaulipas, México" o "México".
- **Enlaces profesionales oficiales validados:** Perfil profesional en LinkedIn y cuenta pública de GitHub.
- **Habilidades y competencias técnicas:** Lenguajes de programación, frameworks, motores de bases de datos, herramientas de control de versiones y metodologías de ingeniería de software ampliamente conocidas en la industria.
- **Roles laborales y periodos generales:** Cargos ocupados (por ejemplo: Desarrollador .NET, Ingeniero de Software) y años de desempeño.
- **Casos de estudio y proyectos anonimizados:** Descripciones estructuradas de problemáticas resueltas siguiendo el formato seguro estipulado en este documento.

---

## 2. Información que Requiere Autorización Expresa
Los siguientes elementos no pueden incluirse salvo que medie una autorización formal, escrita y documentada:

- Nombres comerciales o razones sociales de empresas clientes actuales.
- Logotipos o marcas registradas pertenecientes a clientes o terceras partes.
- Menciones a acuerdos comerciales o contratos específicos.
- Testimonios directos de clientes, supervisores o compañeros de trabajo.
- Métricas o porcentajes cuantitativos de negocio específicos no validados previamente por escrito.
- Enlaces hacia sistemas, portales o recursos pertenecientes a terceros que no sean de dominio y acceso público general.

---

## 3. Información que Nunca Debe Publicarse
Queda terminantemente prohibida la inclusión, mención o divulgación, directa o indirecta, de los siguientes datos en el código fuente, archivos de configuración, documentación, commits, pruebas o contenido del sitio:

1. **Datos de contacto personal:**
   - Número de teléfono particular o móvil.
   - Enlaces directos o números de WhatsApp o cualquier aplicación de mensajería personal.
   - Cuentas de correo electrónico personal.
   - Direcciones de correo profesional inventadas o no verificadas formalmente.
2. **Datos de identidad civil y domicilio:**
   - Cédula profesional, CURP, RFC o cualquier número de identificación fiscal o civil.
   - Domicilio personal, colonia, código postal o referencias exactas de residencia.
3. **Información confidencial de clientes o empleadores:**
   - Nombres o identidades de clientes protegidos por acuerdos de confidencialidad (NDA).
   - Nombres internos de sistemas, proyectos clave, aplicaciones legadas o nombres código de repositorios privados.
   - Diagramas de red interna, direcciones IP privadas, topologías de infraestructura, nombres de host o endpoints internos.
4. **Secretos y seguridad técnica:**
   - Credenciales, llaves de API, tokens JWT, certificados, contraseñas o cadenas de conexión a bases de datos (ni siquiera simuladas en ejemplos de código).
   - Datos transaccionales u operativos reales de negocios o usuarios finales.
5. **Afirmaciones ficticias:**
   - Métricas o estadísticas inventadas ("mejora del 300% en rendimiento").
   - Productos en desarrollo presentados falsamente como soluciones terminadas y desplegadas en producción.
   - Datos obtenidos o extraídos indebidamente desde historiales Git externos, currículums ajenos o documentos no públicos.

---

## 4. Reglas para Anonimizar Proyectos
Cuando se describan proyectos o trabajos desarrollados para organizaciones privadas o clientes bajo acuerdos de confidencialidad, debe emplearse un esquema estructurado de anonimización:

1. **Sector o Industria:** Indicar el sector económico general en lugar del nombre del cliente (ejemplos: "Sector Financiero", "Sector Logístico y de Transporte", "Industria Manufacturera", "Sector Retail / Comercio Minorista").
2. **Problema General:** Describir la necesidad de negocio o desafío técnico en términos abstractos y universales (ejemplo: necesidad de sincronizar inventarios en tiempo real entre múltiples sucursales).
3. **Rol y Responsabilidad:** Explicar el ámbito concreto de actuación (ejemplo: diseño del modelo de datos, implementación de endpoints REST y lógica de validación transaccional).
4. **Tecnologías Clave:** Listar el conjunto de herramientas y lenguajes empleados (ejemplo: .NET Core, C#, SQL Server, Entity Framework Core, Dapper).
5. **Resultado Técnico o de Negocio:** Resumir el desenlace de forma cualitativa u objetiva verificada, sin exponer cifras confidenciales (ejemplo: unificación de la capa de persistencia y estabilización del proceso de intercambio de datos).

---

## 5. Ejemplos de Descripciones Seguras

### Ejemplo 1: Integración de Sistemas
- **Sector:** Logística y distribución comercial.
- **Desafío:** Integrar el sistema de órdenes de venta con plataformas externas de facturación electrónica y seguimiento de despachos.
- **Responsabilidad:** Diseño y desarrollo de servicios web y APIs en C# (.NET) para el intercambio y transformación de mensajes en formato JSON/XML, asegurando idempotencia y control de errores.
- **Tecnologías:** .NET, C#, SQL Server, REST APIs.
- **Resultado:** Automatización del flujo de órdenes hacia la plataforma de despacho, eliminando el procesamiento manual de archivos y mitigando discrepancias en los registros.

### Ejemplo 2: Optimización de Consultas Empresariales
- **Sector:** Servicios corporativos.
- **Desafío:** Lentitud en la generación de reportes operativos mensuales debido a un alto volumen de transacciones y diseño no indexado de la base de datos.
- **Responsabilidad:** Análisis de planes de ejecución en SQL Server, reestructuración de consultas complejas, diseño de índices agrupados y no agrupados, y refactorización de procedimientos almacenados.
- **Tecnologías:** SQL Server, T-SQL, .NET.
- **Resultado:** Reducción sustancial en los tiempos de respuesta de consulta de datos históricos y eliminación de bloqueos en tablas transaccionales.

---

## 6. Lista de Comprobación Previa a Publicar Contenido (Pre-publish Checklist)
Antes de fusionar cualquier cambio hacia la rama principal o publicar contenido en el sitio, debe verificarse obligatoriamente cada punto:

- [ ] ¿El texto omite números de teléfono, enlaces de WhatsApp y correos personales?
- [ ] ¿Se evitó la invención de direcciones de correo electrónico o datos de contacto falsos?
- [ ] ¿La ubicación geográfica indicada se limita únicamente a "Tampico, Tamaulipas, México" o "México"?
- [ ] ¿Se confirmó que no aparece cédula profesional, documento de identidad ni domicilio?
- [ ] ¿Se verifica que ningún cliente privado o actual está nombrado sin autorización formal por escrito?
- [ ] ¿Todos los proyectos descritos utilizan nombres genéricos de sector y omiten nombres de sistemas internos?
- [ ] ¿Se revisó que no existen cadenas de conexión, llaves de API, tokens, contraseñas ni URLs de endpoints privados?
- [ ] ¿Las métricas y logros descritos están respaldados por hechos reales y no han sido exagerados ni inventados?
- [ ] ¿Los proyectos en etapa de desarrollo o prototipo están claramente diferenciados de sistemas concluidos?
- [ ] ¿Se ejecutó una inspección de código y diferencias (`git diff`) para descartar secretos accidentales o texto simulado?

