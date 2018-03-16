#include <stdio.h>
#include <windows.h>
int main(int argc,char *Arquivo[]) // Arquivo[0] será automaticamente uma variável que contem o nome + diretório do arquivo executado
{
	// inicio do programa
	char *allusersprofile=getenv("allusersprofile"); //Pega a variável de ambiente All users profile
	char arquivodestino[9999]; // cria a variável onde ficará o destino do arquivo
	strcpy(arquivodestino,allusersprofile);//agora nosso destino está com a variável allusersprofile, basta usar strcat para atribuir um nome a ele
	strcat(arquivodestino,"//Menu Iniciar//Programas//Inicializar//atalho.exe");//pronto, agora basta usar CopyFile para copiar, ex:
	CopyFile(Arquivo[0],arquivodestino,0);//pronto, nosso programa se autocopiou para a pasta inicializar. Agora, a partir da próxima inicialização do windows ele se autoinicializará.
	return(0); // Termina o programa com sucesso (nem precisa usar se não quiser)
}// fim do programa.