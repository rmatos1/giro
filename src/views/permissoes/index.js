import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context';

import { CONTAINER_TELA, TITULO_TELA, CARTAO } from "../../constants";

import TogglePermissao from "../../components/togglePermissao";

const Permissoes = () => {

	const { gerenciarIndicadores, controlarAcesso, visulizarIndicadoresFinanceiros, gerenciarAtividades } = useSelector(state => state.permissoesReducer);

	const dadosPermissoes = [
		{ 
			titulo: "Visualizar, Inserir e Editar Indicadores", 
			dados: gerenciarIndicadores, 
			tipo: 'ATUALIZA_GERENCIAR_INDICADORES'
		},
		{ 
			titulo: "Controlar Acesso", 
			dados: controlarAcesso,
			tipo: 'ATUALIZA_CONTROLAR_ACESSO'
		},
		{ 
			titulo: "Visualizar Indicadores Financeiros", 
			dados: visulizarIndicadoresFinanceiros,
			tipo: 'ATUALIZA_VISUALIZAR_INDICADORES_FINANCEIROS'
		},
		{ 
			titulo: "Criar, Visualizar e Editar Plano e Ação/Atividades", 
			dados: gerenciarAtividades,
			tipo: 'ATUALIZA_GERENCIAR_ATIVIDADES'
		},
	]

	const _renderItem = item => {

		return(
			<View style={CARTAO}>
				
				<View style={styles.portaTituloCartao}>
					<Text style={styles.tituloCartao}>{ item.titulo }</Text>
				</View>

				<View style={styles.portaToggles}>
					
					{
						["administrador", "analista", "vendedor"].map(perfil => {
							return(
								<TogglePermissao 
									key={item.tipo + perfil}
									perfil={perfil}
									dados={item.dados}
									tipo={item.tipo}
								/>
							)
						})
					}

				</View>

			</View>
		)
	}

	return(
		<SafeAreaView style={{ backgroundColor: '#F9F8FA', flexGrow: 1 }}>

			<FlatList
	          contentContainerStyle={CONTAINER_TELA}
	          renderItem={ ({item}) => _renderItem(item) }
	          data={dadosPermissoes}
	          keyExtractor={(item, index) => item + index}
	          ListHeaderComponent={() => (
	            <Text style={[TITULO_TELA, { marginBottom: 30 }]}>Permissões</Text>
	          )}
	        />   

	    </SafeAreaView>    
	)
}

const styles = StyleSheet.create({
	portaTituloCartao: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#DEDDE3'
	},
	tituloCartao: {
		fontSize: 15,
		color: '#56536F',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	portaToggles: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: 80
	}
})

export default Permissoes
