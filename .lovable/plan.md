

# Refatorar grid de Problemas — Ícones Lucide + subtítulos

## Alterações em `src/components/ProblemsSection.tsx`

### 1. Dados — adicionar ícone e subtítulo a cada problema

| Problema | Ícone Lucide | Subtítulo |
|---|---|---|
| Geladeira não gela | `Snowflake` | Falha no compressor ou gás |
| Freezer com falha | `ThermometerSnowflake` | Temperatura irregular ou ruído |
| Câmara fria com oscilação | `Gauge` | Variação térmica constante |
| Ar inverter com erro na placa | `CircuitBoard` | Erro eletrônico na placa inverter |
| Máquina de lavar com defeito | `WashingMachine` | Motor, bomba ou painel com falha |
| Problemas elétricos em sistemas | `Zap` | Curto, sobrecarga ou fiação |

### 2. Import — adicionar ícones Lucide

Importar `Snowflake, ThermometerSnowflake, Gauge, CircuitBoard, WashingMachine, Zap` de `lucide-react`.

### 3. Card — nova estrutura

- Remover traço azul (`w-1 h-6 rounded-full bg-primary`)
- Adicionar div de ícone: `w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0`
- Texto: `font-medium` no label + nova linha `text-sm text-slate-500` para subtítulo
- Card hover: `hover:shadow-md hover:border-blue-200 transition-all duration-300`
- Manter `ring-1 ring-slate-200/50` e `rounded-[6px]`

### Arquivos editados
- `src/components/ProblemsSection.tsx`

