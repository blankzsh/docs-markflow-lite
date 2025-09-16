# 数学公式

MarkFlow Lite 支持使用 LaTeX 语法渲染数学公式，通过 KaTeX 提供高质量的数学排版。

## 📐 基本语法

### 行内公式

使用单个 `$` 包围行内公式：`$E = mc^2$` 显示为 $E = mc^2$

### 块级公式

使用双个 `$$` 包围块级公式：

```latex
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

显示为：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## 🔢 常用数学符号

### 基本运算

| 符号 | 代码 | 说明 |
|------|------|------|
| $+$ | `+` | 加法 |
| $-$ | `-` | 减法 |
| $\times$ | `\times` | 乘法 |
| $\div$ | `\div` | 除法 |
| $\pm$ | `\pm` | 正负号 |
| $\mp$ | `\mp` | 负正号 |

### 上下标

| 符号 | 代码 | 说明 |
|------|------|------|
| $x^2$ | `x^2` | 上标 |
| $x_1$ | `x_1` | 下标 |
| $x^{2y}$ | `x^{2y}` | 复杂上标 |
| $x_{i+1}$ | `x_{i+1}` | 复杂下标 |

### 分数

| 符号 | 代码 | 说明 |
|------|------|------|
| $\frac{1}{2}$ | `\frac{1}{2}` | 分数 |
| $\frac{x+1}{x-1}$ | `\frac{x+1}{x-1}` | 复杂分数 |
| $\dfrac{1}{2}$ | `\dfrac{1}{2}` | 显示分数 |

### 根号

| 符号 | 代码 | 说明 |
|------|------|------|
| $\sqrt{x}$ | `\sqrt{x}` | 平方根 |
| $\sqrt[3]{x}$ | `\sqrt[3]{x}` | 立方根 |
| $\sqrt[n]{x}$ | `\sqrt[n]{x}` | n次根 |

## 📊 高级功能

### 矩阵

```latex
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

显示为：

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

### 方程组

```latex
$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$
```

显示为：

$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$

### 积分

```latex
$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
```

显示为：

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$

### 求和

```latex
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

显示为：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

### 极限

```latex
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$
```

显示为：

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

## 🎯 希腊字母

| 小写 | 代码 | 大写 | 代码 |
|------|------|------|------|
| $\alpha$ | `\alpha` | $A$ | `A` |
| $\beta$ | `\beta` | $B$ | `B` |
| $\gamma$ | `\gamma` | $\Gamma$ | `\Gamma` |
| $\delta$ | `\delta` | $\Delta$ | `\Delta` |
| $\epsilon$ | `\epsilon` | $E$ | `E` |
| $\theta$ | `\theta` | $\Theta$ | `\Theta` |
| $\lambda$ | `\lambda` | $\Lambda$ | `\Lambda` |
| $\mu$ | `\mu` | $M$ | `M` |
| $\pi$ | `\pi` | $\Pi$ | `\Pi` |
| $\sigma$ | `\sigma` | $\Sigma$ | `\Sigma` |
| $\phi$ | `\phi` | $\Phi$ | `\Phi` |
| $\omega$ | `\omega` | $\Omega$ | `\Omega` |

## 🔗 关系符号

| 符号 | 代码 | 说明 |
|------|------|------|
| $=$ | `=` | 等于 |
| $\neq$ | `\neq` | 不等于 |
| $<$ | `<` | 小于 |
| $>$ | `>` | 大于 |
| $\leq$ | `\leq` | 小于等于 |
| $\geq$ | `\geq` | 大于等于 |
| $\approx$ | `\approx` | 约等于 |
| $\equiv$ | `\equiv` | 恒等于 |
| $\propto$ | `\propto` | 正比于 |

## 🚀 使用技巧

### 1. 公式对齐

使用 `align` 环境对齐多行公式：

```latex
$$
\begin{align}
x &= a + b \\
y &= c + d \\
z &= e + f
\end{align}
$$
```

### 2. 公式编号

使用 `equation` 环境为公式编号：

```latex
$$
\begin{equation}
E = mc^2
\end{equation}
$$
```

### 3. 特殊函数

| 函数 | 代码 | 说明 |
|------|------|------|
| $\sin x$ | `\sin x` | 正弦 |
| $\cos x$ | `\cos x` | 余弦 |
| $\tan x$ | `\tan x` | 正切 |
| $\ln x$ | `\ln x` | 自然对数 |
| $\log x$ | `\log x` | 对数 |
| $\exp x$ | `\exp x` | 指数 |

### 4. 空格控制

| 代码 | 说明 |
|------|------|
| `\,` | 小空格 |
| `\:` | 中空格 |
| `\;` | 大空格 |
| `\!` | 负空格 |
| `\quad` | 一个字符宽度 |
| `\qquad` | 两个字符宽度 |

## 📝 实际示例

### 二次公式

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 欧拉公式

$$
e^{i\pi} + 1 = 0
$$

### 麦克斯韦方程组

$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$

### 概率密度函数

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

## 🔗 相关链接

- [KaTeX 支持的函数](https://katex.org/docs/supported.html)
- [LaTeX 数学符号](https://www.latex-project.org/)
- [返回功能特性](./index)
- [流程图](./flowchart)
- [主题设置](./themes)
