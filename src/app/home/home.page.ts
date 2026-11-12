
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonSearchbar
} from '@ionic/angular';

interface Tarefa {
  id: number;
  nome: string;
  categoria: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonSearchbar
  ]
})
export class HomePage implements OnInit {

  mostrarFormulario = false;
  idEdicao: number | null = null;

  novaTarefa = '';
  categoria = 'Estudo';
  prioridade = 'Média';

  pesquisa = '';
  filtroCategoria = 'Todas';
  filtroPrioridade = 'Todas';
  filtroStatus = 'Todas';

  tarefas: Tarefa[] = [];

  async ngOnInit() {
    await this.carregarTarefas();
  }

  // Carregar tarefas salvas no dispositivo
  async carregarTarefas() {
    try {
      const { value } = await Preferences.get({
        key: 'minhas_tarefas'
      });

      if (value !== null) {
        this.tarefas = JSON.parse(value);
      }
    } catch (erro) {
      console.error('Erro ao carregar tarefas:', erro);
    }
  }

  // Salvar tarefas no dispositivo
  async salvarNoDispositivo() {
    try {
      await Preferences.set({
        key: 'minhas_tarefas',
        value: JSON.stringify(this.tarefas)
      });
    } catch (erro) {
      console.error('Erro ao salvar tarefas:', erro);
      alert('Não foi possível salvar as tarefas.');
    }
  }

  get tarefasFiltradas(): Tarefa[] {
    const texto = this.pesquisa
      .trim()
      .toLocaleLowerCase('pt-BR');

    return this.tarefas.filter(tarefa => {
      const correspondeNome = tarefa.nome
        .toLocaleLowerCase('pt-BR')
        .includes(texto);

      const correspondeCategoria =
        this.filtroCategoria === 'Todas' ||
        tarefa.categoria === this.filtroCategoria;

      const correspondePrioridade =
        this.filtroPrioridade === 'Todas' ||
        tarefa.prioridade === this.filtroPrioridade;

      const correspondeStatus =
        this.filtroStatus === 'Todas' ||
        (this.filtroStatus === 'Concluídas' &&
          tarefa.concluida) ||
        (this.filtroStatus === 'Pendentes' &&
          !tarefa.concluida);

      return (
        correspondeNome &&
        correspondeCategoria &&
        correspondePrioridade &&
        correspondeStatus
      );
    });
  }

  abrirFormulario() {
    this.cancelarFormulario();
    this.mostrarFormulario = true;
  }

  cancelarFormulario() {
    this.mostrarFormulario = false;
    this.idEdicao = null;
    this.novaTarefa = '';
    this.categoria = 'Estudo';
    this.prioridade = 'Média';
  }

  async salvarTarefa() {
    const nome = this.novaTarefa.trim();

    if (!nome) {
      alert('Digite o nome da tarefa!');
      return;
    }

    if (this.idEdicao !== null) {
      const tarefa = this.tarefas.find(
        t => t.id === this.idEdicao
      );

      if (tarefa) {
        tarefa.nome = nome;
        tarefa.categoria = this.categoria;
        tarefa.prioridade = this.prioridade;
      }
    } else {
      const nova: Tarefa = {
        id: Date.now(),
        nome: nome,
        categoria: this.categoria,
        prioridade: this.prioridade,
        concluida: false
      };

      this.tarefas.push(nova);
    }

    await this.salvarNoDispositivo();
    this.cancelarFormulario();
  }

  editarTarefa(tarefa: Tarefa) {
    this.idEdicao = tarefa.id;
    this.novaTarefa = tarefa.nome;
    this.categoria = tarefa.categoria;
    this.prioridade = tarefa.prioridade;
    this.mostrarFormulario = true;
  }

  async excluirTarefa(id: number) {
    const confirmar = confirm(
      'Tem certeza que deseja excluir esta tarefa?'
    );

    if (confirmar) {
      this.tarefas = this.tarefas.filter(
        tarefa => tarefa.id !== id
      );

      await this.salvarNoDispositivo();
    }
  }

  async alternarConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
    await this.salvarNoDispositivo();
  }

  limparFiltros() {
    this.pesquisa = '';
    this.filtroCategoria = 'Todas';
    this.filtroPrioridade = 'Todas';
    this.filtroStatus = 'Todas';
  }
}
