export interface MedicalHistoryQuestions{
    [key: string]: string[]
}

export const medicalHistoryQuestions: MedicalHistoryQuestions[] = [
    {'Blood Pressure': ['High', 'Low', 'Normal']},
    {'Blood Sugar': ['High', 'Low', 'Normal']},
    {'Colestrol': ['High', 'Low', 'Normal']},
    {'BUN': ['High', 'Low', 'Normal']},
    {'Currently on Medication': ['Yes', 'No']},
]

