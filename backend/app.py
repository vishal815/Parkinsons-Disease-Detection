from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import pickle


app = FastAPI()


origins = ["*"]


model = pickle.load(open('parkinsondisease_model.pkl', 'rb'))

scaler = pickle.load(open('scaler_file.pkl', 'rb'))


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ParkinsonModel(BaseModel):
    mdvpFo: float
    mdvpFhi: float
    mdvpFlo: float
    mdvpJitterPercent: float
    mdvpJitterAbsolute: float
    mdvpRap: float
    mdvpPPQ: float
    jitterDDP: float
    mdvpJimmer: float
    mdvpJimmerDB: float
    shimmerAPQ3: float
    shimmerAPQ5: float
    mdvpAPQ: float
    shimmerDDA: float
    NHR: float
    HNR: float
    RPDE: float
    DFA: float
    spread1: float
    spread2: float
    d2: float
    PPE: float


@app.get('/')
def welcome():
    return {
        'success': True,
        'message': 'server of parkinson disease detection is up and running successfully'
    }


@app.post('/pred-parkinson-disease')
async def park_disease(parkDiseaseParameter: ParkinsonModel):
    mdvpFo = parkDiseaseParameter.mdvpFo
    mdvpFhi = parkDiseaseParameter.mdvpFhi
    mdvpFlo = parkDiseaseParameter.mdvpFlo
    mdvpJitterPercent = parkDiseaseParameter.mdvpJitterPercent
    mdvpJitterAbsolute = parkDiseaseParameter.mdvpJitterAbsolute
    mdvpRap = parkDiseaseParameter.mdvpRap
    mdvpPPQ = parkDiseaseParameter.mdvpPPQ
    jitterDDP = parkDiseaseParameter.jitterDDP
    mdvpJimmer = parkDiseaseParameter.mdvpJimmer
    mdvpJimmerDB = parkDiseaseParameter.mdvpJimmerDB
    shimmerAPQ3 = parkDiseaseParameter.shimmerAPQ3
    shimmerAPQ5 = parkDiseaseParameter.shimmerAPQ5
    mdvpAPQ = parkDiseaseParameter.mdvpAPQ
    shimmerDDA = parkDiseaseParameter.shimmerDDA
    NHR = parkDiseaseParameter.NHR
    HNR = parkDiseaseParameter.HNR
    RPDE = parkDiseaseParameter.RPDE
    DFA = parkDiseaseParameter.DFA
    spread1 = parkDiseaseParameter.spread1
    spread2 = parkDiseaseParameter.spread2
    d2 = parkDiseaseParameter.d2
    PPE = parkDiseaseParameter.PPE

    pred_data = (mdvpFo, mdvpFhi, mdvpFlo, mdvpJitterPercent, mdvpJitterAbsolute, mdvpRap, mdvpPPQ, jitterDDP, mdvpJimmer,
                 mdvpJimmerDB, shimmerAPQ3, shimmerAPQ5, mdvpAPQ, shimmerDDA, NHR, HNR, RPDE, DFA, spread1, spread2, d2, PPE)

    pred_data_as_numpy_array = np.asarray(pred_data)

    pred_data_as_numpy_array_reshaped = pred_data_as_numpy_array.reshape(1, -1)

    standard_pred_data = scaler.transform(pred_data_as_numpy_array_reshaped)

    prediction = model.predict(standard_pred_data)

    prediction_msg = ''

    if prediction[0] == 0:
        prediction_msg = 'the person does not have parkinson disease'
    elif prediction[0] == 1:
        prediction_msg = 'the person is having parkinson disease'

    return {
        'success': True,
        'pred_value': float(prediction[0]),
        'pred_msg': prediction_msg
    }
