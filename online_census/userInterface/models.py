from django.db import models

# Create your models here.
class StatePopulation(models.Model):
    state = models.CharField(max_length=50)
    population = models.IntegerField(default=0)
    menPopulation = models.IntegerField(default=0)
    womanPopulation = models.IntegerField(default=0)