# Flowchart

MarkFlow Lite supports creating various types of flowcharts and diagrams using Mermaid syntax.

## 📊 Supported Chart Types

### Flowchart

```mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Execute A]
    B -->|No| D[Execute B]
    C --> E[End]
    D --> E
```

### Sequence Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant S as System
    participant D as Database
    
    U->>S: Send Request
    S->>D: Query Data
    D-->>S: Return Result
    S-->>U: Response Data
```

### Gantt Chart

```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Design Phase
    Requirements    :active, des1, 2024-01-01, 2024-01-07
    UI Design      :des2, after des1, 5d
    section Development Phase
    Frontend Dev    :dev1, 2024-01-15, 10d
    Backend Dev    :dev2, after des2, 8d
```

### Pie Chart

```mermaid
pie title Technology Stack
    "React" : 40
    "TypeScript" : 30
    "Tailwind CSS" : 20
    "Others" : 10
```

### Class Diagram

```mermaid
classDiagram
    class MarkdownEditor {
        +string content
        +boolean darkMode
        +render()
        +save()
        +export()
    }
    
    class FileManager {
        +createFile()
        +openFile()
        +deleteFile()
    }
    
    MarkdownEditor --> FileManager
```

### State Diagram

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Editing : Start Editing
    Editing --> Saving : Save Document
    Editing --> Preview : Switch Preview
    Preview --> Editing : Back to Edit
    Saving --> Idle : Save Complete
```

## 🎨 Chart Customization

### Theme Settings

Mermaid supports multiple themes:

- `default` - Default theme
- `dark` - Dark theme
- `forest` - Forest theme
- `neutral` - Neutral theme

### Custom Configuration

Add configuration at the beginning of your document:

```markdown
```mermaid
%%{init: {'theme':'dark'}}%%
graph TD
    A --> B
```
```

## 📝 Usage Tips

### 1. Basic Syntax

- Use `graph TD` for top-to-bottom flowcharts
- Use `graph LR` for left-to-right flowcharts
- Use `[]` for rectangles, `()` for rounded rectangles, `{}` for diamonds

### 2. Connection Styles

```mermaid
graph TD
    A -->|Label| B
    B -.->|Dotted| C
    C ==>|Thick| D
```

### 3. Node Styles

```mermaid
graph TD
    A[Rectangle]
    B(Rounded Rectangle)
    C((Circle))
    D{Diamond}
    E[/Parallelogram/]
    F[\Reverse Parallelogram\]
```

### 4. Color Settings

```mermaid
graph TD
    A[Start]
    B[Process]
    C[End]
    
    A --> B
    B --> C
    
    classDef start fill:#e1f5fe
    classDef process fill:#fff3e0
    classDef end fill:#f3e5f5
    
    class A start
    class B process
    class C end
```

## 🚀 Best Practices

### 1. Keep It Simple

- Avoid too many elements in a single chart
- Use clear labels and naming
- Arrange layout to avoid overlapping

### 2. Semantic Design

- Use meaningful node names
- Add appropriate comments and descriptions
- Maintain consistent colors and styles

### 3. Responsive Design

- Consider display on different screen sizes
- Avoid overly wide charts
- Use appropriate font sizes

## 🔗 Related Links

- [Mermaid Official Documentation](https://mermaid.js.org/)
- [Back to Features](./index)
- [Math Formulas](./math)
- [Theme Settings](./themes)
