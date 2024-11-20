import pandas as pd

# Substitua 'seu_arquivo.csv' pelo nome do arquivo original
arquivo_original = 'BrFlights2_utf-8.csv'
arquivo_saida = 'companhias_unicas.csv'

# Leia o CSV original
df = pd.read_csv(arquivo_original)

# Selecione a coluna 'Companhia.Aerea' e remova duplicados
df_companhias = df[['Companhia.Aerea']].drop_duplicates()

# Salve em um novo arquivo CSV
df_companhias.to_csv(arquivo_saida, index=False)

print(f"Arquivo {arquivo_saida} criado com sucesso!")
