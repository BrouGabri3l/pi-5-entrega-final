import pandas as pd

# Substitua pelo nome do arquivo original
arquivo_original = 'BrFlights2_utf-8.csv'
arquivo_saida = 'aeroportos_unicos.csv'

# Leia o CSV original
df = pd.read_csv(arquivo_original)

# Combine as colunas 'Aeroporto.Origem' e 'Aeroporto.Destino' em uma única coluna
df_aeroportos = pd.concat([df['Aeroporto.Origem'], df['Aeroporto.Destino']], axis=0)

# Remova duplicados
df_aeroportos_unicos = df_aeroportos.drop_duplicates().reset_index(drop=True)

# Salve em um novo arquivo CSV
df_aeroportos_unicos.to_frame(name='Aeroporto').to_csv(arquivo_saida, index=False)

print(f"Arquivo {arquivo_saida} criado com sucesso!")
