from flask import Flask, request, jsonify
import logging
import pickle
import pandas as pd

app = Flask(__name__)

# Configurar o logger
logging.basicConfig(level=logging.DEBUG)

with open('knn.pkl', 'rb') as model_file:
    try:
        model = pickle.load(model_file)
    except Exception as e:
        logging.error(f'Error: {str(e)}')

@app.route("/")
def index():
    logging.info('Mensagem informativa')
    logging.critical('Mensagem crítica')
    print("rodou")
    return "<h1>Hello Azure!</h1>"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        logging.info('Predicting...')
        data = request.json
        flight_object ={
            "Companhia.Aerea": data["airline"],
            "Aeroporto.Origem": data["originAirport"],
            "Aeroporto.Destino": data["destinationAirport"],
            "Dia.Chegada.Prevista": data["scheduledArrivalDay"],
            "Mes.Chegada.Prevista": data["scheduledArrivalMonth"],
            "Dia.Partida.Prevista": data["scheduledDepartureDay"],
            "Mes.Partida.Prevista": data["scheduledDepartureMonth"]
        }
        
        df = pd.json_normalize(flight_object)
        with open(f'category_mappings.pkl', 'rb') as f:
            category_mappings = pickle.load(f)
        for col in category_mappings:
            df[col] = pd.Categorical(df[col], categories=category_mappings[col])
            df[col] = df[col].cat.codes
        prediction = model.predict(df)
        
    
        response = {'prediction': prediction.tolist()[0]}
        return jsonify(response), 200
    except Exception as e:
        logging.error(f'Error: {str(e)}')
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run()
