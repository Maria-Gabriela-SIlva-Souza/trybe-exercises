# def read(path):
#     """Lê um arquivo de um determinado caminho e retorna seu conteúdo

#     Parâmetros
#     ----------
#     caminho: str
#         Caminho completo para o arquivo

#     Devoluções
#     -------
#     Lista
#         Lista de linhas como dicts
#     """
#     return []

import csv


def read():
    list_jobs = []
    with open("ex.csv", 'r') as file:
        jobs_reader = csv.DictReader(file)

        for row in jobs_reader:
            dictonary = dict(row)
            list_jobs.append(dictonary)
        return list_jobs


def get_unique_job_types():
    result = read()
    job = set()
    # job = [x['cidade'] for x in result if type(x['cidade']) == str]
    for x in result:
        job.add(x['cidade'])
    return job


def get_max_salary():
    result = read()
    job = set()
    # job = [x['cidade'] for x in result if type(x['cidade']) == str]
    for x in result:
        job.add(int(x['telefone']))
    return max(job)


print(get_unique_job_types())
