import area


PEOPLE_QUARE_METER = 2
# numero de pessoas por metro quadrado em média
FIELD_LEN = 240  # em metros
FIELD_WID = 45  # em metros
PEOPLE_AT_CONCERT = area.rectangle(FIELD_LEN, FIELD_WID) // PEOPLE_QUARE_METER


print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
