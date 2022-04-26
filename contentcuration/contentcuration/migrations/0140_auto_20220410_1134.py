# Generated by Django 3.2.5 on 2022-04-10 11:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contentcuration', '0139_alter_contentscreenreader_channel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contentnode',
            old_name='os_validators',
            new_name='osValidators',
        ),
        migrations.RenameField(
            model_name='contentscreenreader',
            old_name='screen_reader_name',
            new_name='readers_name',
        ),
        migrations.RemoveField(
            model_name='contentnode',
            name='screen_reader',
        ),
        migrations.AddField(
            model_name='contentnode',
            name='readers',
            field=models.ManyToManyField(blank=True, related_name='readers_content', to='contentcuration.ContentScreenReader'),
        ),
        migrations.AlterField(
            model_name='contentscreenreader',
            name='channel',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='readerss', to='contentcuration.channel'),
        ),
        migrations.AlterUniqueTogether(
            name='contentscreenreader',
            unique_together={('readers_name', 'channel')},
        ),
    ]
